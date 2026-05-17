export type LanguageOption = {
  label: string;
  value: string;
  langCode: string;
};

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { label: 'Հայերեն (Armine)', value: 'hy-AM-ArmineNeural', langCode: 'hy-AM' },
  { label: 'English (Jenny)', value: 'en-US-JennyNeural', langCode: 'en-US' },
  { label: 'English (Guy)', value: 'en-US-GuyNeural', langCode: 'en-US' },
  { label: 'Русский (Svetlana)', value: 'ru-RU-SvetlanaNeural', langCode: 'ru-RU' },
  { label: 'Deutsch (Katja)', value: 'de-DE-KatjaNeural', langCode: 'de-DE' },
  { label: 'Français (Denise)', value: 'fr-FR-DeniseNeural', langCode: 'fr-FR' },
];

export const DID_DEFAULTS = {
  imageUrl: 'https://i.ibb.co/gLQnCMYF/Chat-GPT-Image-12-2024-20-57-01.png',
  scriptText: 'Բարև ձեզ, ինչպե՞ս եք։',
  cardTitle: 'AI Content Generator',
} as const;

export const DID_LABELS = {
  outputType: 'Ընտրեք արդյունքը՝',
  language: 'Ընտրեք լեզուն՝',
  imageUrl: 'Image URL:',
  script: 'Տեքստ:',
  videoButton: 'Ստեղծել Վիդեո',
  audioButton: 'Լսել Աուդիոն',
  videoMode: 'Վիդեո (D-ID)',
  audioMode: 'Աուդիո (Browser)',
} as const;
