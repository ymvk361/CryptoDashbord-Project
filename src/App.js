// React component for the main application.
// It includes various sections such as charts, currency settings, search bar, portfolio, exchange, and top coins.

// Library Imports
import { useSelector } from "react-redux";
import Charts from "./components/Charts/Charts.jsx";

// Component Imports
import Currency from "./components/Currency/Currency.jsx";
import Exchange from "./components/Exchange/Exchange.jsx";
import Header from "./components/Header/Header.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import TopCoins from "./components/TopSection/TopCoins.jsx";

function App() {
  // Redux selector to access global store state
  const currency = useSelector((state) => state.globalStore.currency);
  const symbol = useSelector((state) => state.globalStore.symbol);

  return (
    <div className="min-h-screen bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
      {/* Header Component */}
      <header className="">
        <Header />
      </header>

      {/* Main content Area */}
      <div className="p-4">
        {/* Container for main content with background and spacing */}
        <div className="bg-light-muted dark:bg-dark-muted duration-100 rounded-xl p-4 m-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
          <main className="grid gap-4 lg:col-span-3">
            {/* Currency and SearchBar Section */}
            <div className="grid gap-4 grid-cols-9 grid-rows-1">
              {/* Currency Component */}
              <section className="dashboard_item col-span-2 text-light-base dark:text-dark-base text-sm sm:text-base">
                <Currency />
              </section>

              {/* SearchBar Component */}
              <section className="dashboard_item col-span-7 bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
                <SearchBar currency={currency} symbol={symbol} />
              </section>
            </div>

            {/* Charts Section */}
            <section className="dashboard_item h-[525px] bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
              <Charts currency={currency} symbol={symbol} />
            </section>

            {/* Portfolio and Exchange Section */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Portfolio Component */}
              <section className="dashboard_item md:col-span-1 bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
                <Portfolio />
              </section>

              {/* Exchange Component */}
              <section className="dashboard_item md:col-span-1 bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
                <Exchange />
              </section>
            </div>
          </main>

          {/* TopCoins Section */}
          <aside className=" dashboard_item lg:col-span-1 bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
            <TopCoins currency={currency} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
