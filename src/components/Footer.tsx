import BgGradient from "./ui/bg-gradient";
import BorderGradient from "./ui/border-gradient";

const navigation = [
  { name: "Demo", href: "/demo" },
  { name: "License", href: "/license" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "App", href: "/app" },
];

const marsNavigation = [
  { name: "Product Hunt", href: "https://www.producthunt.com/" },
];

export default () => (
  <footer className="relative px-8 pt-24 overflow-hidden">
    <div>
      <BorderGradient className=" absolute inset-x-0 top-0 mx-auto" />
      <BgGradient className="absolute inset-x-0 top-0 mx-auto" />
      <div className="custom-screen-lg pb-6 gap-x-8 items-start justify-between flex-wrap relative sm:flex">
        <div className="max-w-xs space-y-3">
          <h1>Brainero</h1>
          <p className="text-sm text-zinc-300">
            We are in a mission to make the world a better place by providing the best AI automation platform.
          </p>
        </div>
        <div className="flex-1 mt-4 pb-8 flex flex-wrap gap-4 font-medium sm:justify-end sm:mt-0">
          <ul className="flex-grow max-w-[15rem] space-y-2">
            <li className="text-zinc-100 font-medium">Resources</li>
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-zinc-400 hover:text-zinc-100 duration-200"
              >
                <a href={item.href} className="block sm:inline-block">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            <li className="text-zinc-100 font-medium">Brainero</li>
            <li                 className="text-sm text-zinc-400 hover:text-zinc-100 duration-200">
              <b>Linegon SRL</b><br/>
              VAT ID: 05114530230<br/>
              Via Adriano Garbinin 15, Verona (VR), Italy
            </li>
            {marsNavigation.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-zinc-400 hover:text-zinc-100 duration-200"
              >
                <a href={item.href} target="_blank" className="block">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-sm custom-screen text-center border-t border-zinc-800">
        <div className="text-zinc-300 py-8">
          &copy; {
            new Date().getFullYear()
          } Brainero. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);