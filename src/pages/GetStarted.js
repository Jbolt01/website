import React, { memo } from 'react';
import Hero from 'pages/Hero';
import { useAppContext } from 'hooks';

function GetStarted(props) {
  const { accent, ...rest } = props;
  const { dispatch } = useAppContext();
  const onClick = () => dispatch({ type: 'setRedirect', value: 'https://discord.gg/Usz9UXbQNy' });

  return (
    <Hero
      center
      accent={accent}
      label="Get Started"
      title2="Ready to Learn?"
      button={{
        accent,
        href: 'https://discord.gg/Usz9UXbQNy',
        label: 'Join Discord',
        onClick,
      }}
      {...rest}
    />
  );
}

export default memo(GetStarted);
