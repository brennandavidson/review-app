export interface Client {
  slug: string;
  name: string;
  logo: string;
  smsLink: string;
  emailLink: string;
  qrCode: string;
}

export const clients: Record<string, Client> = {
  airassuranceapp: {
    slug: "airassuranceapp",
    name: "Air Assurance LLC",
    logo: "/logos/airassurance.jpeg",
    smsLink: "sms:?&body=Thanks%20for%20leaving%20a%20quick%20review%20for%20Air%20Assurance.%20Sharing%20your%20experience%20helps%20us%20reach%20and%20serve%20our%20community.%20Click%20here%3A%20https%3A%2F%2Feasyreview.pro%2Fairassurance",
    emailLink: "mailto:?subject=What%20Did%20You%20Think%3F&body=Thanks%20for%20leaving%20a%20quick%20review%20for%20Air%20Assurance.%20Sharing%20your%20experience%20helps%20us%20reach%20and%20serve%20our%20community.%20Click%20here%3A%20https%3A%2F%2Feasyreview.pro%2Fairassurance",
    qrCode: "/qrcodes/airassurance.png",
  },
  designgrooveapp: {
    slug: "designgrooveapp",
    name: "Design Groove",
    logo: "/logos/designgroove.png",
    smsLink: "sms:?&body=Thanks%20for%20leaving%20a%20quick%20review%20for%20Design%20Groove.%20Sharing%20your%20experience%20helps%20us%20reach%20and%20serve%20our%20community.%20Click%20here%3A%20https%3A%2F%2Feasyreview.pro%2Fdesigngroove",
    emailLink: "mailto:?subject=What%20Did%20You%20Think%3F&body=Thanks%20for%20leaving%20a%20quick%20review%20for%20Design%20Groove.%20Sharing%20your%20experience%20helps%20us%20reach%20and%20serve%20our%20community.%20Click%20here%3A%20https%3A%2F%2Feasyreview.pro%2Fdesigngroove",
    qrCode: "/qrcodes/designgroove.png",
  },
  romansbarbershopapp: {
    slug: "romansbarbershopapp",
    name: "Roman's Barbershop",
    logo: "/logos/romansbarbershop.png",
    smsLink: "sms:?&body=Thanks%20for%20leaving%20a%20quick%20review%20for%20Roman's%20Barbershop.%20Sharing%20your%20experience%20helps%20us%20reach%20and%20serve%20our%20community.%20Click%20here%3A%20https%3A%2F%2Feasyreview.pro%2Fromansbarbershop",
    emailLink: "mailto:?subject=What%20Did%20You%20Think%3F&body=Thanks%20for%20leaving%20a%20quick%20review%20for%20Roman's%20Barbershop.%20Sharing%20your%20experience%20helps%20us%20reach%20and%20serve%20our%20community.%20Click%20here%3A%20https%3A%2F%2Feasyreview.pro%2Fromansbarbershop",
    qrCode: "/qrcodes/romansbarbershop.png",
  },
  russellpestapp: {
    slug: "russellpestapp",
    name: "Russell Pest Control",
    logo: "/logos/russellpest.png",
    smsLink: "sms:?&body=Thanks%20for%20leaving%20a%20quick%20review%20for%20Russell%20Pest%20Control.%20Sharing%20your%20experience%20helps%20us%20reach%20and%20serve%20our%20community.%20Click%20here%3A%20https%3A%2F%2Feasyreview.pro%2Frussellpest",
    emailLink: "mailto:?subject=What%20Did%20You%20Think%3F&body=Thanks%20for%20leaving%20a%20quick%20review%20for%20Russell%20Pest%20Control.%20Sharing%20your%20experience%20helps%20us%20reach%20and%20serve%20our%20community.%20Click%20here%3A%20https%3A%2F%2Feasyreview.pro%2Frussellpest",
    qrCode: "/qrcodes/russellpest.png",
  },
  azfamilyairapp: {
    slug: "azfamilyairapp",
    name: "Arizona Family Air",
    logo: "/logos/azfamilyair.png",
    smsLink: "sms:?&body=Thanks%20for%20leaving%20a%20quick%20review%20for%20Arizona%20Family%20Air.%20Sharing%20your%20experience%20helps%20us%20reach%20and%20serve%20our%20community.%20Click%20here%3A%20https%3A%2F%2Feasyreview.pro%2Fazfamilyair",
    emailLink: "mailto:?subject=What%20Did%20You%20Think%3F&body=Thanks%20for%20leaving%20a%20quick%20review%20for%20Arizona%20Family%20Air.%20Sharing%20your%20experience%20helps%20us%20reach%20and%20serve%20our%20community.%20Click%20here%3A%20https%3A%2F%2Feasyreview.pro%2Fazfamilyair",
    qrCode: "/qrcodes/azfamilyair.png",
  },
};

export function getClient(slug: string): Client | undefined {
  return clients[slug];
}

export function getAllClientSlugs(): string[] {
  return Object.keys(clients);
}
