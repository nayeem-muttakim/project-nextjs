import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 rounded-lg">
      <div className="navbar-start">
        <Link href='/' className="btn btn-ghost text-xl">Project</Link>
      </div>

      <div className="navbar-end">
        <Link href="/add" className="btn btn-outline">
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
