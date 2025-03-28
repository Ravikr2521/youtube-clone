import { IconType } from "react-icons";
// @ts-ignore

interface IconStar {
  icon: IconType;
  classes?: string;
}

const IconComponent: React.FC<IconStar> = ({ icon, classes = "" }) => {
  const Icon = icon as React.ElementType;

  return Icon ? <Icon className={classes} /> : null;
};

export default IconComponent;
