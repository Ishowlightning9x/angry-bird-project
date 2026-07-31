import HeroSection from "./components/HeroSection";
import StoryTimeline from "./components/StoryTimeline";
import LoveCounter from "./components/LoveCounter";
import ReasonsSection from "./components/ReasonsSection";
import HeartGarden from "./components/HeartGarden";
import SecretLetters from "./components/SecretLetter";
import PromiseSection from "./components/PromiseSection";
import PhotoGallery from "./components/PhotoGallery";
import FinalSurprise from "./components/FinalSurprise";
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StoryTimeline />
      <LoveCounter />
      <ReasonsSection />
      <HeartGarden />
      <SecretLetters />
      <PromiseSection />
      <PhotoGallery />
      <FinalSurprise />
      <footer className="py-8 text-center text-xs text-gray-400 border-t border-pink-100 bg-white">
        Made with ❤️ by Shwet for Angry Bird • {new Date().getFullYear()}
      </footer>
    </main>
  );
}