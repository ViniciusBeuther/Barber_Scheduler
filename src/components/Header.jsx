import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {

  const [logged, setLogged] = useState(undefined);
  const [company, setCompany] = useState(undefined);	

  useEffect(() => {
    if (localStorage.getItem("company") !== null) {
      setCompany(localStorage.getItem("company"));
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <section>
      <nav className="bg-customBlue-500 px-4 py-1">
        <div className="flex  justify-between">
          <Link to={"/homeScreen"}>
            <Typography className="cursor-pointer py-1.5 text-2xl font-normal text-white">
              Scheduler
            </Typography>
          </Link>
          <article>
            <div className="flex items-center gap-x-1">
              {logged === false &&
                <>
                  <Button variant="text" size="sm">
                    <Link to={"/"}>
                      <Typography
                        variant="paragraph"
                        className="normal-case text-white"
                      >
                        Login
                      </Typography>
                    </Link>
                  </Button>
                  <Button size="sm" className=" bg-customOrange-500 hover:bg-orange-700">
                    <Link to={"/register"}>
                      <Typography
                        variant="paragraph"
                        className="flex h-4 items-center normal-case"
                      >
                        Registre-se
                      </Typography>
                    </Link>
                  </Button>
                </>
              }
              {logged === true &&
                <Button size="sm" className=" bg-customOrange-500 hover:bg-orange-700">
                  <Link to={"/admin/"+company}>
                      <Typography
                        variant="paragraph"
                        className="flex h-4 items-center normal-case"
                      >
                        My Company
                      </Typography>
                  </Link>
                </Button>
              }
            </div>
          </article>
        </div>
      </nav>
    </section>
  );
}

export default Header;
