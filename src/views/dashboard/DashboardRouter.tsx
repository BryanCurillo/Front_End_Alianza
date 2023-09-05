import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./home/Home";
import { Toast } from "primereact/toast";
import React, { useRef } from "react";
import Footer from "../../common/Footer";
import { SideBarMenu } from "../../Components/SideBar/SideBarMenu";

export const DashboardRouter = () => {
  //Datos del sessionStorage
  const userData = sessionStorage.getItem("user");
  const userObj = JSON.parse(userData || "{}");
  const rol = userObj.rol;
  const userId = userObj.id as number;
  const toast = useRef<Toast>(null);

  //Se utiliza a travez de Toast para mostrar mensajes de confirmacion/error.
  const showError = (errorPrincipal: string, detalleError: string) => {
    toast.current?.show({
      severity: "error",
      summary: errorPrincipal,
      detail: detalleError,
      life: 3000,
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <main>
        <div>
          <div>
            <Switch>
              <Route path="/dashboard/home">
                {rol === 1 ? (
                  <>
                    <SideBarMenu />
                    <Home />
                  </>
                ) : rol === 2 ? (
                  <>
                    <SideBarMenu />
                    <Home />
                  </>
                ) : (
                  <>
                    <SideBarMenu />
                  </>
                )}
              </Route>

              <Route path="/login">
                {rol === 1 ? (
                  <SideBarMenu />
                ) : rol === 2 ? (
                  <SideBarMenu />
                ) : (
                  <SideBarMenu />
                )}
              </Route>
              <Route path="/ficha">
                {rol === 1 ? (
                  <>
                    <SideBarMenu />
                    <PersonaContext />
                  </>
                ) : rol === 2 ? (
                  <>
                    <SideBarMenu />
                  </>
                ) : (
                  <SideBarMenu />
                )}
              </Route>

              <Route path="*">
                {rol === 1 ? (
                  <SideBarMenu />
                ) : rol === 2 ? (
                  <SideBarMenu />
                ) : (
                  <SideBarMenu />
                )}
                <Redirect to="/dashboard/home" />
              </Route>
            </Switch>
          </div>
        </div>
      </main>
    </>
  );
};
