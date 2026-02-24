const useScrollToSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return scrollToSection;
};

export default useScrollToSection;
