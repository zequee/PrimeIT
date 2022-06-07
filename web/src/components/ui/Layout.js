import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ContainerNav, Title, Description} from "./styledComponents";


export default function Layout() {  
  return (
    <main>
      <nav>
        <ContainerNav>
          <Title>
            <Description>
                <Link style={{color:"white"}} to="/">Create User</Link> | {""}
                <Link style={{color:"white"}} to="/users/">List Users</Link>
            </Description>
          </Title>
        </ContainerNav>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
