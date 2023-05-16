"use client";

interface MenuItemsProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemsProps> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-300 transition font-semibold"
    >
      {label}
    </div>
  );
};

export default MenuItem;
