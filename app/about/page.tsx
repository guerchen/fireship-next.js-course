import { Metadata } from "next";

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'About us',
    description: 'We are a social media platform!'
}

export default async function About() {
    return (
        <main>
            <h1>About</h1>
            <p>We are a social media platform!</p>
        </main>
    )
}