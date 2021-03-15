import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "./../../store/actions/gamesAction";

//Components
import GameDetails from "../../components/GameDetails/GameDetails";
import GamesList from "./../../components/GamesList/GamesList";

//Styling and Animation
import styles from "./Home.module.scss";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.gamesState
  );

  return (
    <div className={styles.container}>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetails pathId={pathId} />}
        </AnimatePresence>
        {searched && !!searched.length && (
          <GamesList games={searched} title={`Searched Games`} />
        )}
        <GamesList games={upcoming} title={`Upcoming Games`} />
        <GamesList games={popular} title={`Popular Games`} />
        <GamesList games={newGames} title={`New Games`} />
      </AnimateSharedLayout>
    </div>
  );
};

export default Home;
