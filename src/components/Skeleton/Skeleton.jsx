import { SkeletonCard, SkeletonLine, SkeletonWrapper } from "./styles";

const Skeleton = () => (
  <SkeletonWrapper>
    <SkeletonCard>
      <SkeletonLine $width="60%" $height="1.5rem" />
      <SkeletonLine $width="40%" $height="1rem" />
      <SkeletonLine $width="80%" $height="4rem" />
      <SkeletonLine $width="50%" $height="1rem" />
    </SkeletonCard>
    <SkeletonCard>
      <SkeletonLine $width="40%" $height="1rem" />
      <SkeletonLine $width="100%" $height="80px" />
    </SkeletonCard>
  </SkeletonWrapper>
);

export default Skeleton;
