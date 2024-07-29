import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  AdvertiseFillF,
  AideOutlineF,
  AkarIconsCloudFF,
  AnchorOutlineF,
  AttachementOutlineR,
  AttachmentOutlineF,
  BackArrowFF,
  BagOutlineF,
  BasilOutlineF,
  BiKeyFF,
  BoatFillF,
  BoatIconFF,
  BoatWFillF,
  CarbonDocumentFF,
  CarbonSettingFF,
  CarbonWebSheetFF,
  CheckCircleFillF,
  CheckFillF,
  CheckOutlineF,
  CiPhoneFillF,
  CirtificateOutlineF,
  ClarityContractFF,
  ClarityLicenseFF,
  DoubleCheckOutlineF,
  DownChavelF,
  DragIconFF,
  DropdownFillF,
  EmojiFillF,
  EyeFillF,
  EyeOutlineF,
  FlyFillF,
  GeoFillF,
  HIstoryRoundF,
  IcShartQRCodeFF,
  IdentyCardOutlineF,
  InfoCircleFillF,
  InfoOutlineF,
  InformationFillF,
  InviteOutlineF,
  IphoneOutleneF,
  LocationFillF,
  MakiPoliceFF,
  MarkEmailOutline,
  MdiAutoPayFF,
  MedalFillF,
  MicrophoneFillF,
  MorevertVerticleF,
  NimbusInvoice,
  NotificationOutlineF,
  ParkOnlineFF,
  ParkPeopleSafeFF,
  PasswordOutlineF,
  PlusOutlineF,
  PlusOutlineFF,
  ProfileOutlineF,
  QuestionCircleFillF,
  RIQRScanFF,
  ReviewCheckMarkFF,
  RightArrowOutlineF,
  ScanOutlineF,
  SearchOutlineF,
  SecurityRoundF,
  SettingOutlineF,
  ShieldCheckFillF,
  SimpleBoatLogoFillF,
  SmileOutlineF,
  SolarImportFF,
  StarFillF,
  TextDescriptionF,
  TrushOutlineF,
  UploadOutlineF,
  UserInfoFillF,
  UserOutlineF,
  VertIconF,
  WelcomeCapFF,
  WorldOutlineF,
  XOutlineF,
} from "../index";

import "./IconPreview.scss";
import {
  CoolerFF,
  GasStoveFF,
  SopupKitchenFF,
  ElectricBoltFF,
  SpeedFF,
  CookOutlineFF,
  ParkOutlineFF,
  SeaWavesFF,
  JanGpsFF,
  StretchFF,
  CarBatteryFF,
  AnchorRoundedFF,
  AstrophotographyFF,
  CookingOutlineFF,
  ElecticalServicesFF,
  FireExtenguisherFF,
  GasMeterFF,
  OvenGenOutline,
  WaterEcOutlineFF,
  CompasOutline,
  IndustrialFridgeFF,
  FridgeOutlineFF,
  HeightVoltageFF,
  CheckOutOutlineFF,
  PowerPlugBatteryFF,
  SunAngleFF,
  CodeBlockFF,
  SwimmingPoolFF,
  AlarmWarningFF,
  RadarLineFF,
  Radar2OutlineFF,
  CleanToiletFF,
  FishHookFF,
  MicroWavesFF,
  BiminiFF,
  BossoirFF,
  BridgeFF,
  CockpitFF,
  ElectricBridgeFF,
  ElectricMeterFF,
  ElectricSwimFF,
  FlyBridgeFF,
  HeatingFF,
  HiveranceFF,
  HookFF,
  LaderFF,
  ManualSwimFF,
  SevereColdFF,
  MDICupIceFF,
  ShowerPF,
  SwimFF,
  TaudFF,
  ScreenFF,
  Accastillage,
  ForSale,
  HeartFF,
  MechanicFF,
  MetoF,
  SeeAllF,
} from "../Icon/EquipmentIcons/Icons";

const IconPreview = () => {
  const icons = [
    { title: "SeeAllF", icon: <SeeAllF height={30} width={30} /> },
    { title: "MetoF", icon: <MetoF height={30} width={30} /> },
    { title: "MechanicFF", icon: <MechanicFF height={30} width={30} /> },
    { title: "HeartFF", icon: <HeartFF height={30} width={30} /> },
    { title: "ForSale", icon: <ForSale height={30} width={30} /> },
    { title: "Accastillage", icon: <Accastillage height={30} width={30} /> },

    { title: "BiminiFF", icon: <BiminiFF height={30} width={30} /> },
    { title: "BossoirFF", icon: <BossoirFF height={30} width={30} /> },
    { title: "BridgeFF", icon: <BridgeFF height={30} width={30} /> },
    { title: "CockpitFF", icon: <CockpitFF height={30} width={30} /> },
    {
      title: "ElectricBridgeFF",
      icon: <ElectricBridgeFF height={30} width={30} />,
    },
    {
      title: "ElectricMeterFF",
      icon: <ElectricMeterFF height={30} width={30} />,
    },
    {
      title: "ElectricSwimFF",
      icon: <ElectricSwimFF height={30} width={30} />,
    },
    { title: "FlyBridgeFF", icon: <FlyBridgeFF height={30} width={30} /> },
    { title: "HeatingFF", icon: <HeatingFF height={30} width={30} /> },
    { title: "HiveranceFF", icon: <HiveranceFF height={30} width={30} /> },
    { title: "HookFF", icon: <HookFF height={30} width={30} /> },
    { title: "LaderFF", icon: <LaderFF height={30} width={30} /> },
    { title: "ManualSwimFF", icon: <ManualSwimFF height={30} width={30} /> },
    { title: "SevereColdFF", icon: <SevereColdFF height={30} width={30} /> },
    { title: "MDICupIceFF", icon: <MDICupIceFF height={30} width={30} /> },
    { title: "ShowerPF", icon: <ShowerPF height={30} width={30} /> },
    { title: "SwimFF", icon: <SwimFF height={30} width={30} /> },
    { title: "TaudFF", icon: <TaudFF height={30} width={30} /> },
    { title: "ScreenFF", icon: <ScreenFF height={30} width={30} /> },
    { title: "CoolerFF", icon: <CoolerFF height={30} width={30} /> },
    { title: "GasStoveFF", icon: <GasStoveFF height={30} width={30} /> },
    {
      title: "SopupKitchenFF",
      icon: <SopupKitchenFF height={30} width={30} />,
    },
    {
      title: "ElectricBoltFF",
      icon: <ElectricBoltFF height={30} width={30} />,
    },
    { title: "SpeedFF", icon: <SpeedFF height={30} width={30} /> },
    { title: "CookOutlineFF", icon: <CookOutlineFF height={30} width={30} /> },
    { title: "ParkOutlineFF", icon: <ParkOutlineFF height={30} width={30} /> },
    { title: "SeaWavesFF", icon: <SeaWavesFF height={30} width={30} /> },
    { title: "JanGpsFF", icon: <JanGpsFF height={30} width={30} /> },
    { title: "StretchFF", icon: <StretchFF height={30} width={30} /> },
    { title: "CarBatteryFF", icon: <CarBatteryFF height={30} width={30} /> },
    {
      title: "AnchorRoundedFF",
      icon: <AnchorRoundedFF height={30} width={30} />,
    },
    {
      title: "AstrophotographyFF",
      icon: <AstrophotographyFF height={30} width={30} />,
    },
    {
      title: "CookingOutlineFF",
      icon: <CookingOutlineFF height={30} width={30} />,
    },
    {
      title: "ElecticalServicesFF",
      icon: <ElecticalServicesFF height={30} width={30} />,
    },
    {
      title: "FireExtenguisherFF",
      icon: <FireExtenguisherFF height={30} width={30} />,
    },
    { title: "GasMeterFF", icon: <GasMeterFF height={30} width={30} /> },
    {
      title: "OvenGenOutline",
      icon: <OvenGenOutline height={30} width={30} />,
    },
    {
      title: "WaterEcOutlineFF",
      icon: <WaterEcOutlineFF height={30} width={30} />,
    },
    { title: "CompasOutline", icon: <CompasOutline height={30} width={30} /> },
    {
      title: "IndustrialFridgeFF",
      icon: <IndustrialFridgeFF height={30} width={30} />,
    },
    {
      title: "FridgeOutlineFF",
      icon: <FridgeOutlineFF height={30} width={30} />,
    },
    {
      title: "HeightVoltageFF",
      icon: <HeightVoltageFF height={30} width={30} />,
    },
    {
      title: "CheckOutOutlineFF",
      icon: <CheckOutOutlineFF height={30} width={30} />,
    },
    {
      title: "PowerPlugBatteryFF",
      icon: <PowerPlugBatteryFF height={30} width={30} />,
    },
    { title: "SunAngleFF", icon: <SunAngleFF height={30} width={30} /> },
    { title: "CodeBlockFF", icon: <CodeBlockFF height={30} width={30} /> },
    {
      title: "SwimmingPoolFF",
      icon: <SwimmingPoolFF height={30} width={30} />,
    },
    {
      title: "AlarmWarningFF",
      icon: <AlarmWarningFF height={30} width={30} />,
    },
    { title: "RadarLineFF", icon: <RadarLineFF height={30} width={30} /> },
    {
      title: "Radar2OutlineFF",
      icon: <Radar2OutlineFF height={30} width={30} />,
    },
    { title: "CleanToiletFF", icon: <CleanToiletFF height={30} width={30} /> },
    { title: "FishHookFF", icon: <FishHookFF height={30} width={30} /> },
    { title: "MicroWavesFF", icon: <MicroWavesFF height={30} width={30} /> },
    {
      title: "AkarIconsCloudFF",
      icon: <AkarIconsCloudFF height={30} width={30} />,
    },
    { title: "RIQRScanFF", icon: <RIQRScanFF height={30} width={30} /> },
    { title: "NimbusInvoice", icon: <NimbusInvoice height={30} width={30} /> },
    { title: "MdiAutoPayFF", icon: <MdiAutoPayFF height={30} width={30} /> },
    { title: "WelcomeCapFF", icon: <WelcomeCapFF height={30} width={30} /> },
    {
      title: "IcShartQRCodeFF",
      icon: <IcShartQRCodeFF height={30} width={30} />,
    },
    {
      title: "ParkPeopleSafeFF",
      icon: <ParkPeopleSafeFF height={30} width={30} />,
    },
    {
      title: "ClarityLicenseFF",
      icon: <ClarityLicenseFF height={30} width={30} />,
    },
    { title: "BiKeyFF", icon: <BiKeyFF height={30} width={30} /> },
    {
      title: "CarbonDocumentFF",
      icon: <CarbonDocumentFF height={30} width={30} />,
    },
    {
      title: "CarbonSettingFF",
      icon: <CarbonSettingFF height={30} width={30} />,
    },
    {
      title: "CarbonWebSheetFF",
      icon: <CarbonWebSheetFF height={30} width={30} />,
    },
    {
      title: "ClarityContractFF",
      icon: <ClarityContractFF height={30} width={30} />,
    },
    { title: "ParkOnlineFF", icon: <ParkOnlineFF height={30} width={30} /> },
    { title: "MakiPoliceFF", icon: <MakiPoliceFF height={30} width={30} /> },
    {
      title: "ReviewCheckMarkFF",
      icon: <ReviewCheckMarkFF height={30} width={30} />,
    },
    { title: "SolarImportFF", icon: <SolarImportFF height={30} width={30} /> },
    { title: "DragIconFF", icon: <DragIconFF height={30} width={30} /> },
    { title: "BackArrowFF", icon: <BackArrowFF height={30} width={30} /> },
    { title: "BoatIconFF", icon: <BoatIconFF height={30} width={30} /> },
    {
      title: "QuestionCircleFillF",
      icon: <QuestionCircleFillF height={30} width={30} />,
    },
    {
      title: "SimpleBoatLogoFillF",
      icon: <SimpleBoatLogoFillF height={30} width={30} />,
    },
    { title: "XOutlineF", icon: <XOutlineF height={30} width={30} /> },
    { title: "MedalFillF", icon: <MedalFillF height={30} width={30} /> },
    {
      title: "TextDescriptionF",
      icon: <TextDescriptionF height={30} width={30} />,
    },
    {
      title: "InfoCircleFillF",
      icon: <InfoCircleFillF height={30} width={30} />,
    },
    { title: "LocationFillF", icon: <LocationFillF height={30} width={30} /> },
    { title: "DropdownFillF", icon: <DropdownFillF height={30} width={30} /> },
    { title: "CiPhoneFillF", icon: <CiPhoneFillF height={30} width={30} /> },
    { title: "GeoFillF", icon: <GeoFillF height={30} width={30} /> },
    { title: "CheckOutlineF", icon: <CheckOutlineF height={30} width={30} /> },
    { title: "EyeOutlineF", icon: <EyeOutlineF height={30} width={30} /> },
    {
      title: "UploadOutlineF",
      icon: <UploadOutlineF height={30} width={30} />,
    },
    {
      title: "CheckCircleFillF",
      icon: <CheckCircleFillF height={30} width={30} />,
    },
    { title: "EyeFillF", icon: <EyeFillF height={30} width={30} /> },
    {
      title: "ShieldCheckFillF",
      icon: <ShieldCheckFillF height={30} width={30} />,
    },
    { title: "DownChavelF", icon: <DownChavelF height={30} width={30} /> },
    { title: "UserInfoFillF", icon: <UserInfoFillF height={30} width={30} /> },
    { title: "CheckFillF", icon: <CheckFillF height={30} width={30} /> },
    {
      title: "PasswordOutlineF",
      icon: <PasswordOutlineF height={30} width={30} />,
    },
    {
      title: "MarkEmailOutline",
      icon: <MarkEmailOutline height={30} width={30} />,
    },
    {
      title: "SecurityRoundF",
      icon: <SecurityRoundF height={30} width={30} />,
    },
    { title: "HIstoryRoundF", icon: <HIstoryRoundF height={30} width={30} /> },
    {
      title: "IphoneOutleneF",
      icon: <IphoneOutleneF height={30} width={30} />,
    },
    {
      title: "IdentyCardOutlineF",
      icon: <IdentyCardOutlineF height={30} width={30} />,
    },
    { title: "BoatWFillF", icon: <BoatWFillF height={30} width={30} /> },
    { title: "WorldOutlineF", icon: <WorldOutlineF height={30} width={30} /> },
    {
      title: "InformationFillF",
      icon: <InformationFillF height={30} width={30} />,
    },
    { title: "TrushOutlineF", icon: <TrushOutlineF height={30} width={30} /> },
    {
      title: "AttachementOutlineR",
      icon: <AttachementOutlineR height={30} width={30} />,
    },
    { title: "SmileOutlineF", icon: <SmileOutlineF height={30} width={30} /> },
    {
      title: "MicrophoneFillF",
      icon: <MicrophoneFillF height={30} width={30} />,
    },
    {
      title: "MorevertVerticleF",
      icon: <MorevertVerticleF height={30} width={30} />,
    },
    {
      title: "SearchOutlineF",
      icon: <SearchOutlineF height={30} width={30} />,
    },
    { title: "FlyFillF", icon: <FlyFillF height={30} width={30} /> },
    {
      title: "AttachmentOutlineF",
      icon: <AttachmentOutlineF height={30} width={30} />,
    },
    { title: "EmojiFillF", icon: <EmojiFillF height={30} width={30} /> },
    { title: "BoatFillF", icon: <BoatFillF height={30} width={30} /> },
    { title: "StarFillF", icon: <StarFillF height={30} width={30} /> },
    {
      title: "DoubleCheckOutlineF",
      icon: <DoubleCheckOutlineF height={30} width={30} />,
    },
    { title: "VertIconF", icon: <VertIconF height={30} width={30} /> },
    { title: "AideOutlineF", icon: <AideOutlineF height={30} width={30} /> },
    {
      title: "AnchorOutlineF",
      icon: <AnchorOutlineF height={30} width={30} />,
    },
    { title: "BagOutlineF", icon: <BagOutlineF height={30} width={30} /> },
    { title: "BasilOutlineF", icon: <BasilOutlineF height={30} width={30} /> },
    { title: "UserOutlineF", icon: <UserOutlineF height={30} width={30} /> },
    { title: "ScanOutlineF", icon: <ScanOutlineF height={30} width={30} /> },
    {
      title: "SettingOutlineF",
      icon: <SettingOutlineF height={30} width={30} />,
    },
    {
      title: "RightArrowOutlineF",
      icon: <RightArrowOutlineF height={30} width={30} />,
    },
    {
      title: "ProfileOutlineF",
      icon: <ProfileOutlineF height={30} width={30} />,
    },
    { title: "PlusOutlineF", icon: <PlusOutlineF height={30} width={30} /> },
    {
      title: "NotificationOutlineF",
      icon: <NotificationOutlineF height={30} width={30} />,
    },
    {
      title: "InviteOutlineF",
      icon: <InviteOutlineF height={30} width={30} />,
    },
    { title: "InfoOutlineF", icon: <InfoOutlineF height={30} width={30} /> },
    {
      title: "AdvertiseFillF",
      icon: <AdvertiseFillF height={30} width={30} />,
    },
    {
      title: "CirtificateOutlineF",
      icon: <CirtificateOutlineF height={30} width={30} />,
    },
    { title: "PlusOutlineFF", icon: <PlusOutlineFF height={30} width={30} /> },
  ];

  const [isCopied, setIsCopied] = useState("");

  useEffect(() => {
    if (isCopied) {
      toast.success(isCopied + " Coppied");
    }
  }, [isCopied]);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = (copyText) => {
    // Asynchronously call copyTextToClipboard

    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(copyText);
        setTimeout(() => {
          setIsCopied("");
        }, 1500);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  return (
    <>
      <div className="icon__preview">
        {icons.map((item, indx) => (
          <div
            onClick={() => handleCopyClick(item.title)}
            className="icon__card"
            key={indx + item.title}
          >
            {item.icon}
            <div className="title">{item.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IconPreview;
