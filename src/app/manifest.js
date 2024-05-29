export default function manifest() {
  return {
    name: 'Power & Control',
    short_name: 'Power & Control',
    description:
      'Power & Control provide solar panel installations and electrical services across Derbyshire and the East Midlands',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
