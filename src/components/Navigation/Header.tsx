export type User = {
  id: number;
  email: string;
  name: string;
  password: string;
};

const Header = () => {
  let user: User | null = null;
  const userData = localStorage.getItem("user");

  if (userData) {
    user = JSON.parse(userData);
  }

  return (
    <header>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          {user !== null ? (
            <h1 className="text-2xl text-gray-300 ml-8">Hola {user.name} ✌ </h1>
          ) : null}
        </div>
      </div>
    </header>
  );
};
export default Header;
