import { useState } from 'react'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import { PROJECTS_TEXT } from './consts'
import { projectsStyles } from './styles'
import { isProjectDescriptionLong } from './utils'

type ProjectDescriptionProps = {
  description: string
}

export default function ProjectDescription({ description }: ProjectDescriptionProps) {
  const [expanded, setExpanded] = useState(false)
  const isLong = isProjectDescriptionLong(description)

  if (!isLong) {
    return (
      <Typography.Paragraph className={projectsStyles.cardDescription}>
        {description}
      </Typography.Paragraph>
    )
  }

  const descriptionClassName = [
    projectsStyles.cardDescription,
    expanded ? projectsStyles.cardDescriptionExpanded : projectsStyles.cardDescriptionCollapsed,
  ].join(' ')

  return (
    <div className={projectsStyles.descriptionWrap}>
      <Typography.Paragraph className={descriptionClassName}>{description}</Typography.Paragraph>
      <Button
        type="text"
        className={projectsStyles.descriptionToggle}
        icon={expanded ? <UpOutlined /> : <DownOutlined />}
        onClick={() => setExpanded((open) => !open)}
        aria-label={expanded ? PROJECTS_TEXT.readLessAria : PROJECTS_TEXT.readMoreAria}
        aria-expanded={expanded}
      />
    </div>
  )
}
