import React, { useState, useEffect } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout, Menu, Avatar } from "antd";
import routes from "./routes";
import Logo from "./assets/logo.svg";
import Spinner from "./components/Spinner";
import keys from "./configs";
import axios from "axios";

const { Header, Content, Footer } = Layout;

function App() {
  const [account, setAccount] = useState();
  const loading = useSelector((state) => state.loading);
  const color = "#D40242";

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/account?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}`
    );
    setAccount(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              <img width={180} src={Logo} alt="logo" />
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
              <Menu.Item key="3">
                <Link to="/profile">
                  {account?.avatar?.tmdb?.avatar_path ? (
                    <img
                      width={50}
                      style={{ borderRadius: "50%", objectFit: "cover" }}
                      src={keys.IMG_URL + account?.avatar?.tmdb?.avatar_path}
                      alt={account?.username}
                    />
                  ) : (
                    <Avatar
                      style={{
                        backgroundColor: color,
                        verticalAlign: "middle",
                      }}
                      size="large"
                      gap={4}
                    >
                      {account?.name[0]?.toUpperCase() ||
                        account?.username[0]?.toUpperCase()}
                    </Avatar>
                  )}
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <div className="site-layout-content">
              <Switch>
                {routes?.map((item) => (
                  <Route
                    exact={true}
                    key={item?.key}
                    path={item?.path}
                    component={item?.component}
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
