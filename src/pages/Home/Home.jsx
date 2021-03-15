import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames, loadDetail } from "./../../store/actions/gamesAction";

//Components
import GameDetails from "../../components/GameDetails/GameDetails";
import GamesList from "./../../components/GamesList/GamesList";

//Styling and Animation
import styles from "./Home.module.scss";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Home = () => {
  const { pathname } = useLocation();
  const pathId = pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
    if(pathId) {
      document.body.style.overflow = "hidden";
      dispatch(loadDetail(pathId));
    }
  }, [dispatch]);

  const { game, popular, newGames, upcoming, searched, isGameLoading, areGamesLoading } = useSelector(
    (state) => state.gamesState
  );

  return (
    <div className={styles.container}>
      <AnimateSharedLayout type="crossfade">
        {searched && !!searched.length && (
          <GamesList games={searched} title={`Search Results`} />
        )}
        <GamesList games={upcoming} title={`Upcoming Games`} />
        <GamesList games={popular} title={`Popular Games`} />
        <GamesList games={newGames} title={`New Games`} />
        <AnimatePresence>
          {pathId && !isGameLoading && game && game.id && !areGamesLoading && <GameDetails pathId={pathId} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default Home;
