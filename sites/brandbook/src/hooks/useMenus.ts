import { useDocs, Entry } from "docz";
type MenuGroup = Record<string, Entry[]>;

const groupMenus: (acc: MenuGroup, doc: Entry) => MenuGroup = (acc, doc) => {
  const menuKey = doc.menu as string;
  return { ...acc, [menuKey]: acc[menuKey] ? [...acc[menuKey], doc] : [doc] };
};

const groupSubMenus: (acc: MenuGroup, doc: Entry) => MenuGroup = (acc, doc) => {
  const subMenuKey = doc.submenu;
  return {
    ...acc,
    [subMenuKey]: acc[subMenuKey] ? [...acc[subMenuKey], doc] : [doc],
  };
};

const flattenSubs = (groupedDocs: MenuGroup) => {
  return Object.entries(groupedDocs).map(([name, entries]) => {
    return { name, entries };
  });
};

const useMenus = () => {
  const docs = useDocs();

  if (!docs) {
    return [];
  }
  const noMenu = docs.filter((doc) => !doc.menu) || [];
  const haveMenu = docs.filter((doc) => doc.menu);

  if (!haveMenu) {
    return [noMenu];
  }

  const tempMenus = haveMenu.reduce(groupMenus, {});

  const menuPairs = Object.entries(tempMenus).map(([name, docs]) => {
    const groupedDocs = docs.reduce(groupSubMenus, {});
    const allKeys = Object.keys(groupedDocs);
    const entries =
      allKeys.length <= 1 ? groupedDocs[allKeys[0]] : flattenSubs(groupedDocs);
    return { name, entries };
  });
  // @ts-ignore
  return [...noMenu, ...menuPairs];
};

export { useMenus };

