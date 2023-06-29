export function useTopBar() {
  const nonExposedList = ['/'];
  const isNonExposed = nonExposedList.includes(window.location.pathname);

  return { isNonExposed };
}
