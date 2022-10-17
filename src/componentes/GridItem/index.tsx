import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import logo from '../../assets/lol.png';
import { helper } from '../../data/helper';
type Props = {
  item: GridItemType;
  func: () => void;
};

export const GridItem = ({ item, func }: Props) => {
  return (
    <C.Container
      shownBackground={item.shownPermanent || item.shown}
      onClick={func}
    >
      {!item.shownPermanent && !item.shown && (
        <C.Icon
          src={logo}
          alt=""
          draggable="false"
          opacity={0.5}
          wihe={'50px'}
        />
      )}

      {(item.shownPermanent || item.shown) && item.item !== null && (
        <C.Icon src={helper[item.item].icon} alt="" draggable="false" />
      )}
    </C.Container>
  );
};
