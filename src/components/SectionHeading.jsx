import { NavLink } from "react-router-dom";

const SectionHeading = ({
  title,
  linkText,
  linkTo,
  action,
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
        {title}
      </h2>

      {action ? (
        action
      ) : (
        linkTo && (
          <NavLink
            to={linkTo}
            className="text-sm md:text-base text-primary font-medium hover:underline"
          >
            {linkText}
          </NavLink>
        )
      )}
    </div>
  );
};

export default SectionHeading;