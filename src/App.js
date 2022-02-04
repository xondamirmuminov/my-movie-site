import React from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout, Menu } from "antd";
import routes from "./routes";
import Netflix from "./assets/Netflix-Logo.wine (1).svg";
import Spinner from "./components/Spinner";

const { Header, Content, Footer } = Layout;

function App() {
  const loading = useSelector((state) => state.loading);

  return (
    <div className="App">
      <Spinner loading={loading.loading} />
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh" }} className="layout">
          <Header
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link to="/">
              <img width={100} src={Netflix} alt="logo" />
            </Link>
            <Menu
              style={{ width: "50%", justifyContent: "flex-end" }}
              theme="dark"
              mode="horizontal"
            >
              <Menu.Item key="0">
                <Link to="/movies">Movies</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/tv">TV Shows</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/people">People</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <div className="site-layout-content">
              <Switch>
                {routes.map((item) => (
                  <Route
                    exact={true}
                    key={item.key}
                    path={item.path}
                    component={item.component}
                  />
                ))}
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Netflix ©2022 Created by Xondamir Mo'minov
          </Footer>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
