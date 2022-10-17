import { useEffect, useState } from 'react';
import * as C from './App.styles';

import RestartIcon from './assets/restart.svg';

import { Button } from './componentes/Button';
import { InfoItem } from './componentes/InfoItem';
import { GridItem } from './componentes/GridItem';

import { GridItemType } from './types/GridItemType';
import { FormatTimerElapsed, helper } from './data/helper';

const App = () => {
  const [playing, setPlaying] = useState<boolean>(true);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(5);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => resetAndCreateGrid(), []);
  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTimeElapsed(timeElapsed + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  // Verificar se os abertos são iguais
  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter((item) => item.shown === true);
      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          // V1 - se eles são iguais, tornar permanentes
          let tmpGrid = [...gridItems];

          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].shownPermanent = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0);
        } else {
          // V2 - Fechar diferentes
          setTimeout(() => {
            let tmpGrid = [...gridItems];

            for (let i in tmpGrid) {
              tmpGrid[i].shown = false;
            }
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 800);
        }
        setMoveCount((moveCount) => moveCount + 1);
      }
    }
  }, [shownCount, gridItems]);
  // game over
  useEffect(() => {
    if (moveCount > 0 && gridItems.every((i) => i.shownPermanent === true)) {
      setPlaying(false);
    }
  }, [moveCount, gridItems]);

  const resetAndCreateGrid = () => {
    // Step 1 - Reset the game
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    // Step 2 - Create the grid

    // Step 2.1 - Create the grid empty
    let tmpGrid: GridItemType[] = [];

    for (let i = 0; i < helper.length * 2; i++)
      tmpGrid.push({ item: null, shown: false, shownPermanent: false });

    // Step 2.2 - Fill in the grid
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < helper.length; i++) {
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (helper.length * 2));
        }
        tmpGrid[pos].item = i;
      }
    }

    // Step 2.3 - Put on in the state
    setGridItems(tmpGrid);

    // Step 3- Start the game
    setPlaying(true);
  };
  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItems];
      if (!tmpGrid[index].shownPermanent && !tmpGrid[index].shown) {
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }
      setGridItems(tmpGrid);
    }
  };

  return (
    <C.Container>
      <C.Info>
        <C.InfoArea>
          <InfoItem label="Tempo" value={FormatTimerElapsed(timeElapsed)} />
          <InfoItem label="Movimentos" value={moveCount.toString()} />
        </C.InfoArea>
        <Button
          label="Reiniciar"
          icon={RestartIcon}
          onClicks={resetAndCreateGrid}
        />
      </C.Info>
      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              func={() => handleItemClick(index)}
            />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
};

export default App;
