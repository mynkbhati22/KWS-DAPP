import clsx from 'clsx';
import { makeStyles } from '@mui/styles';

const useStylesBase = makeStyles({
  root: {
    color: 'blue',
  },
  hover: {
    color: 'red',
  },
});

export default function DetailCards() {
  // Order doesn't matter

  const classesBase = useStylesBase();

  // Order doesn't matter
  const className = clsx(classesBase.root);

  // color: red 🔴 wins.
  return <div className={className}>hello</div>;
}
