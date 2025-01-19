import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import { Color } from '../styles/Color';

export const MAIN_FONT = SpaceGrotesk({
  subsets: ['latin'],
  variable: '--font-main',
  preload: true,
  fallback: ['sans-serif'],
});
export const APP_NAME = 'ChewySwap Warp - Cross-Meme Bridge';
export const APP_DESCRIPTION =
  'Bridging Shibes - The first cross-doggo bridge from your favorite Doggo DEX! Bridge between Shibarium, Dogechain and More!';
export const APP_URL = 'warp.chewyswap.dog';
export const BRAND_COLOR = Color.primary['500'];
export const BACKGROUND_COLOR = Color.primary['500'];
export const BACKGROUND_IMAGE = 'url(/backgrounds/main.svg)';
