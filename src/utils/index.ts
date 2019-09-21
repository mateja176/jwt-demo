export const constructEntity = <Dto, E extends Dto>(entity: E) => (
  dto: Dto,
) => {
  Object.entries(dto).forEach(([key, value]) => {
    entity[key] = value;
  });

  return entity;
};
