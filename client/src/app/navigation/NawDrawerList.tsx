import React, { ReactElement } from 'react';
import { visitor_routes, admin_routes, reg_routes, user_routes } from 'router';
import ListItemLink from 'app/navigation/ListLinkItem';
import { LogoutButton } from 'components/buttons';
import { CustomImageAvatar } from 'components/avatars';
import { CustomDivider } from 'components/dividers';
import { ListWrapper } from 'components/lists';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { INavUserData } from './shared/types';
import { link_text } from 'constants/text';

interface Props {
  onSelect: () => void;
  onLogout: (e: any) => void;
  auth: boolean;
  admin: boolean;
  user: INavUserData;
}

interface ILinkList {
  text: string;
  icon: IconName;
  link: string;
  guard?: boolean;
}

const NavDrawerList: React.FC<Props> = ({
  onSelect,
  onLogout,
  auth,
  admin,
  user,
}) => {
  const nav_items: ILinkList[] = [
    { text: link_text.home, icon: 'home', link: visitor_routes.HOME },
    { text: link_text.results, icon: 'list-ul', link: visitor_routes.RESULTS },
    { text: link_text.squad, icon: 'user-friends', link: visitor_routes.SQUAD },
    { text: link_text.team, icon: 'shield-alt', link: visitor_routes.TEAM },
    {
      text: link_text.results_stats,
      icon: 'chart-pie',
      link: visitor_routes.RESULTS_STATS,
    },
    {
      text: link_text.squad_stats,
      icon: 'chart-line',
      link: visitor_routes.PLAYERS_STATS,
    },
    {
      text: link_text.about,
      icon: 'question-circle',
      link: visitor_routes.ABOUT,
    },
  ];

  const auth_items: ILinkList[] = [
    {
      text: link_text.sign_in,
      icon: 'sign-in-alt',
      link: reg_routes.SIGN_IN,
      guard: !auth,
    },
    {
      text: link_text.admin,
      icon: 'user-cog',
      link: admin_routes.ADMIN,
      guard: auth && admin,
    },
  ];

  const userDetails: ReactElement | null =
    user && auth ? (
      <>
        <ListItemLink
          avatar={<CustomImageAvatar imageUrl={user.image} />}
          text={user.name}
          secondary={user.email}
          to={user_routes.PROFILE}
          onClick={onSelect}
        />
        <CustomDivider />
      </>
    ) : null;

  const logout = auth ? <LogoutButton onClick={onLogout} /> : null;

  return (
    <ListWrapper>
      {userDetails}
      {nav_items.map((item) => (
        <ListItemLink
          key={item.text}
          to={item.link}
          text={item.text}
          icon={item.icon}
          onClick={onSelect}
        />
      ))}
      <CustomDivider />
      {auth_items.map((item) =>
        item.guard ? (
          <ListItemLink
            key={item.text}
            to={item.link}
            text={item.text}
            icon={item.icon}
            onClick={onSelect}
          />
        ) : null
      )}
      {logout}
    </ListWrapper>
  );
};

export default NavDrawerList;
