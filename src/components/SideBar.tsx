import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import IconComponent from "./IconComponent";
import { useAppSelector } from "../store/hooks";

export default function Sidebar() {
  const isOpen = useAppSelector((state: any) => state.sidebar.isOpen);

  const mainLinks = [
    {
      icon: <IconComponent icon={MdHomeFilled} classes={"text-xl"} />,
      name: "Home",
    },
    {
      icon: <IconComponent icon={FaRegCompass} classes={"text-xl"} />,
      name: "Explore",
    },
    {
      icon: (
        <IconComponent icon={MdOutlineSlowMotionVideo} classes={"text-xl"} />
      ),
      name: "Shorts",
    },
    {
      icon: <IconComponent icon={MdSubscriptions} classes={"text-xl"} />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <IconComponent icon={MdOutlineVideoLibrary} classes={"text-xl"} />,
      name: "Library",
    },
    {
      icon: <IconComponent icon={MdHistory} classes={"text-xl"} />,
      name: "History",
    },
    {
      icon: <IconComponent icon={MdOutlineSmartDisplay} classes={"text-xl"} />,
      name: "Your Videos",
    },
    {
      icon: <IconComponent icon={MdOutlineWatchLater} classes={"text-xl"} />,
      name: "Watch Later",
    },
    {
      icon: <IconComponent icon={MdThumbUpOffAlt} classes={"text-xl"} />,
      name: "Liked Videos",
    },
  ];

  const subscriptionLinks = [
    {
      icon: <IconComponent icon={TbMusic} classes={"text-xl"} />,
      name: "Music",
    },
    {
      icon: (
        <IconComponent icon={MdOutlineSportsVolleyball} classes={"text-xl"} />
      ),
      name: "Sport",
    },
    {
      icon: <IconComponent icon={TbDeviceGamepad2} classes={"text-xl"} />,
      name: "Gaming",
    },
    {
      icon: <IconComponent icon={GiFilmStrip} classes={"text-xl"} />,
      name: "Films",
    },
  ];

  const helpLinks = [
    {
      icon: <IconComponent icon={MdSettings} classes={"text-xl"} />,
      name: "Settings",
    },
    {
      icon: <IconComponent icon={MdOutlinedFlag} classes={"text-xl"} />,
      name: "Report history",
    },
    {
      icon: <IconComponent icon={MdOutlineHelpOutline} classes={"text-xl"} />,
      name: "Help",
    },
    {
      icon: <IconComponent icon={MdOutlineFeedback} classes={"text-xl"} />,
      name: "Send feedback",
    },
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features",
    ],
  ];

  return (
    <div
      className={`w-2/12 dark:bg-[#212121] bg-gray-100 pr-1 overflow-auto pb-8 transition-transform duration-300 ${
        isOpen ? "transform-none" : "transform -translate-x-full"
      }`}
    >
      <ul className="flex flex-col border-b-2 dark:border-gray-700 border-gray-200">
        {mainLinks.map(({ icon, name }) => (
          <li
            key={name}
            className={`pl-6 py-3 hover:dark:bg-zinc-600 hover:bg-gray-200 ${
              name === "Home" ? "dark:bg-slate-600 bg-gray-200" : ""
            }`}
          >
            <span className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </span>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 dark:border-gray-700 border-gray-200">
        {secondaryLinks.map(({ icon, name }) => (
          <li
            key={name}
            className="pl-6 py-3 hover:dark:bg-zinc-600 hover:bg-gray-200"
          >
            <span className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </span>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 dark:border-gray-700 border-gray-200">
        {subscriptionLinks.map(({ icon, name }) => (
          <li
            key={name}
            className="pl-6 py-3 hover:dark:bg-zinc-600 hover:bg-gray-200"
          >
            <span className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </span>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 dark:border-gray-700 border-gray-200">
        {helpLinks.map(({ icon, name }) => (
          <li
            key={name}
            className="pl-6 py-3 hover:dark:bg-zinc-600 hover:bg-gray-200"
          >
            <span className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </span>
          </li>
        ))}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[0].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[1].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <span className="px-4 text-sm text-zinc-400">
        &copy; {new Date().getFullYear()} Google
      </span>
      <br />
      <p className="px-4 pt-3 text-sm text-zinc-400">
        This clone is for educational purposes only.
      </p>
    </div>
  );
}
