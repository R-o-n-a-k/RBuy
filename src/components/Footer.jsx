import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const footerSections = [
  {
    title: "Shop",
    links: [
      { name: "All Products", href: "/shop" },
      { name: "Men", href: "/shop/men" },
      { name: "Women", href: "/shop/women" },
      { name: "Electronics", href: "/shop/electronics" },
      { name: "Jewellery", href: "/shop/jewellery" },
    ],
  },
  {
    title: "Account",
    links: [
      { name: "Login", href: "/auth" },
      { name: "Cart", href: "/cart" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Contact", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="page mt-16 border-t bg-background">
      <div className="container mx-auto px-4 py-12">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div className="text-center sm:text-left">
            <Link
              to="/"
              className="inline-flex text-2xl md:text-3xl font-extrabold tracking-tight select-none"
            >
              <span className="text-primary">R</span>
              <span className="text-gray-700">Buy</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              A modern React e-commerce application powered by Fake Store API.
              Browse products, explore categories and enjoy a seamless shopping
              experience.
            </p>
          </div>

          {/* Footer Links */}

          {footerSections.map((section) => (
            <div
              key={section.title}
              className="text-center sm:text-left"
            >
              <h3 className="mb-4 text-base font-semibold">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-muted-foreground sm:text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold">rbuy</span>.
            All rights reserved.
          </p>

          <p>
            Built with React • Tailwind CSS • Shadcn
          </p>

          <p>
            Crafted by{" "}
            <a
              href="https://ronakjpatel.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Ronak Patel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;