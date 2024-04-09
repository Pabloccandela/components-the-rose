import Link from 'next/link'
import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next';

export default async function Footer(){
    const client = createClient();
    const settings = await client.getSingle("settings");
  return (
    <footer>
        <Link href="/">{settings.data.title_page}</Link>
        <p>©{new Date().getFullYear()} {settings.data.title_page}</p>
        <ul>
            {settings.data.navigation.map(({link,label},index) => (
                <li key={index}><PrismicNextLink field={link}>{label}</PrismicNextLink></li>
            ))}
        </ul>
    </footer>
  )
}
