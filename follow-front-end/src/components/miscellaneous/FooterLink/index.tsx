interface FooterLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ className }) => {
  return (
    <div className={`w-full flex items-center justify-center p-3 ${className}`}>
      <span className="text-xs md:text-sm">
       Desenvolvido por Pablo Silva. Acesse meu
      </span>
      <a
        href="https://www.pablosilvadev.com.br"
        target="_blank"
        className="ml-1 text-xs md:text-sm"
      >
         site.
      </a>
    </div>
  );
};
export default FooterLink;
