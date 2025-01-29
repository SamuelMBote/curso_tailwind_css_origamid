import './style.css';
const mobileButton = document.getElementById('mobile-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileButton?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('hidden');
  mobileMenu?.classList.toggle('flex');
});

mobileMenu?.addEventListener('click', () => {
  mobileMenu?.classList.add('hidden');
  mobileMenu?.classList.remove('flex');
});

const video: HTMLVideoElement | null = document.getElementById(
  'video',
) as HTMLVideoElement;
const temperatura = document.getElementById('temperatura');
const tempo = document.getElementById('tempo');
const dia = document.getElementById('dia');

const random = Math.floor(Math.random() * 10) + 19;
temperatura!.innerText = `${random}º`;
tempo!.innerHTML =
  random < 25
    ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
</svg>
`
    : ` <svg xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>`;
const date = new Date();
dia!.innerText = date
  .toLocaleDateString('pt-BR', { weekday: 'long' })
  .replace('-feira', '');
video!.src = random < 25 ? 'src/img/video_chuva.mp4' : 'src/img/video_sol.mp4';
