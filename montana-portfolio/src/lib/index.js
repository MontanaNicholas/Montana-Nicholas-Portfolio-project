// place files you want to import through the `$lib` alias in this folder.

export { default as Header } from "./components/Header.svelte";
// @ts-ignore
export { default as Navigation } from "./components/Navigation.svelte";
// @ts-ignore
export { default as Footer } from "./components/Footer.svelte";
// @ts-ignore
export { default as Card } from "./components/Navigation.svelte";
// @ts-ignore

import { Header, Navigation, Footer, Card } from "$lib";