



interface NavbarProps {
  children: React.ReactNode;

}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <>
       <header>
        <nav className="lg:w-full lg:flex bg-radixindigo-800 text-radixgray-1100 justify-between items-center py-2">
            <div className="lg:px-32 lg:flex lg:items-center">
                <p className="text-5xl px-2">MyDrive</p>
            </div>
            <ul className="lg:flex lg:px-32 lg:w-1/3 lg:justify-evenly">
              {children}
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar

