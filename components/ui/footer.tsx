import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social as */}

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            Copyright © 2023 Dynavo Labs
          </div>
        </div>
      </div>
    </footer>
  );
}
