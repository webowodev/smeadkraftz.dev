export default interface BaseResponse<Entity> {
  data: Entity | null;
  error: any;
}
