import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import { routes } from "./routes";

const { Header, Content, Footer } = Layout;

function App() {
  const URLS = {
    movies: {
      path: ["/popular", "/now-playing", "/upcoming", "/top-rated"],
      name: ["Popular", "Now Playing", "Upcoming", "Top Rated"],
    },
    tv: {
      path: ["/popular", "/airing-today", "/on-tv", "/top-rated"],
      name: ["Popular", "Airing Today", "On TV", "Top Rated"],
    },
    people: { path: ["/popular-people"], name: ["Popular People"] },
  };

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }} className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">Content</div>
          <Switch>
            {routes.map((item) => {
              <Route exact path={item.path} component={item.component} />;
            })}
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Netflix ©2022 Created by Xondamir Mo'minov
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
