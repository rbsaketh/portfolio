type Props = { children: React.ReactNode; className?: string };

const ListItem2 = ({ children, className = '' }: Props) => {
  return (
    <li
      className={`before:content-[''] flex before:mr-3 before:text-accent before:block ${className}`}
    >
      {children}
    </li>
  );
};

export default ListItem2;
