import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const CV_EXPORT_WIDTH_PX = 1000;

const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;

async function waitForImages(root: HTMLElement): Promise<void> {
  const images = Array.from(root.querySelectorAll('img'));
  await Promise.all(
    images.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
            return;
          }
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }),
    ),
  );
}

function createExportClone(source: HTMLElement): HTMLElement {
  const root = document.createElement('div');
  root.className = 'cv-pdf-export-root';

  const clone = source.cloneNode(true) as HTMLElement;
  clone.removeAttribute('id');
  clone.classList.add('cv-export-desktop');
  root.appendChild(clone);
  document.body.appendChild(root);

  return root;
}

export async function downloadCvPdf(elementId: string, fileName: string): Promise<void> {
  const source = document.getElementById(elementId);
  if (!source) return;

  const exportRoot = createExportClone(source);
  const clone = exportRoot.firstElementChild as HTMLElement;

  try {
    await waitForImages(clone);
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
    });

    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: CV_EXPORT_WIDTH_PX,
      height: clone.scrollHeight,
      windowWidth: CV_EXPORT_WIDTH_PX,
      windowHeight: clone.scrollHeight,
      scrollX: 0,
      scrollY: 0,
    });

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = A4_WIDTH_MM;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 0;
    let heightLeft = imgHeight;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= A4_HEIGHT_MM;

    while (heightLeft > 0) {
      position -= A4_HEIGHT_MM;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= A4_HEIGHT_MM;
    }

    pdf.save(fileName);
  } finally {
    exportRoot.remove();
  }
}
