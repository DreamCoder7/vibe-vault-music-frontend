import { FC } from "react";

import { ActionCellProps } from "../../types/props/shared.props";

const ActionsCell: FC<ActionCellProps> = ({ Icon, onClick, className, id }) => {
  return (
    <button
      id={id}
      className={`${className} relative bg-blue-50 p-2 rounded-md`}
      onClick={onClick}
    >
      <div className="flex items-center">
        {Icon && (
          <span className="flex items-center space-x-2">
            <Icon className="w-4 h-4 text-blue-500" />
          </span>
        )}
      </div>
    </button>
  );
};

export default ActionsCell;
