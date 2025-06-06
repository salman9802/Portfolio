import ProfileLeft from "./profile/ProfileLeft";
import ProfileRight from "./profile/ProfileRight";

const Profile = () => {
  return (
    <div className="flex min-h-screen flex-col-reverse justify-center gap-4 pt-8 md:gap-8 md:pt-10 lg:flex-row lg:pt-16">
      <ProfileLeft />
      <ProfileRight />
    </div>
  );
};

export default Profile;
