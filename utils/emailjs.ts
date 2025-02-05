import { init } from 'emailjs-com'

const config = {
  userId: process.env.NEXT_PUBLIC_USER_ID,
  serviceId: process.env.NEXT_PUBLIC_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID,
}

if (
  config.userId !== undefined &&
  config.serviceId !== undefined &&
  config.templateId !== undefined
) {
  init(config.userId)
}

export const emailjsConfig = config
