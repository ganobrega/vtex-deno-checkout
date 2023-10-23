// https://io2.vtex.com/checkout-ui/v6.98.4/script/ko-templates.min.js

export as namespace MCUI;

interface IAnalytics {
  reportData: (data: unknown) => void;
  addToCart: (data: unknown) => void;
  removeFromCart: (data: unknown) => void;
  checkout: (data: unknown) => void;
  checkoutOption: (data: unknown) => void;
  purchaseOrder: (data: unknown) => void;
  purchase: (data: unknown) => void;
  addOrderFormEvents: (data: unknown) => void;
  sendEvent: (data: unknown) => void;
}

type IAnalytics4 = {
  viewCart: (data: unknown) => void;
  removeFromCart: (data: unknown) => void;
  addShippingInfo: (data: unknown) => void;
  beginCheckout: (data: unknown) => void;
  addPaymentInfo: (data: unknown) => void;
  addToCart: (data: unknown) => void;
};

//@TODO: amplitude.mappers().eventName().paymentMethodNotAssociated
//@TODO: amplitude.mappers().eventName().paymentMethodAssociated
interface IAmplitude {
  mappers: () => unknown;
  logEvent: (event: string, data: unknown) => void;
}

interface IConfig {
  readonly version: string;
  MessageUtils: unknown;
  browserUtils: unknown;
  SpecialGiftCardProviderGroupViewModel: unknown;
  SpecialGiftCardGroupViewModel: unknown;
  Config: unknown;
}

interface ITracking {
  analytics: IAnalytics;
  analytics4: IAnalytics4;
  amplitude: IAmplitude;
}

interface IRouterEvent {
  subscribe: (callback: (value: unknown) => void) => void;
}

interface IRouter {
  state: {
    subscribe: (callback: (value: "cart" | "orderform") => void) => void;
  };
  cartRoute: () => void;
  defaultRoute: () => void;
  emailRoute: () => void;
  hashForStep: (hash: string) => void;
  inCart: IRouterEvent;
  inOrderForm: IRouterEvent;
  initializeRouter: () => void;
  isStepBefore: () => void;
  loginRoute: () => void;
  orderformRoute: () => void;
  parseHash: () => void;
  parsingHash: false;
  paymentRoute: () => void;
  profileRoute: () => void;
}

interface ICheckoutModel {
  readonly cartURL: (value: string) => void;
  readonly countryCode: () => string;
  readonly isRecaptchaV3Enabled: () => boolean;
  readonly locale: () => string;
  readonly optinNewsLetter: () => boolean;
  readonly salesChannel: () => string;

  readonly canEditData: () => boolean;
  readonly disablePaymentButton: () => void;
  readonly hasShippingPreview: (value: boolean) => void;
  readonly loading: (value: boolean, cb: void) => void;
  readonly showShipping: (value: boolean) => void;
  readonly update: () => Promise<unknown>;

  readonly addressSubmitHandler: () => void;
  readonly adjustLocaleForCountryCode: (newVakue: string) => void;
  readonly alertPCICookieClick: () => void;
  readonly alertPCICookieClickInfo: () => void;
  readonly alertPCICookieMessage: () => void;
  readonly backgroundLoading: () => unknown;
  readonly billingAddressSubmitHandler: () => void;
  readonly broadcastSaveUserDataOptions: () => void;
  readonly campaignMedium: () => unknown;
  readonly campaignName: () => unknown;
  readonly campaignSource: () => unknown;
  readonly cookiePCI: undefined;
  readonly cookiePCIExists: () => void;
  readonly corporateDocumentMask: () => unknown;
  readonly countriesWithNoPostalCode: string[];
  readonly countriesWithPostalCode: string[];
  readonly countriesWithPostalCodeAccordingToCity: string[];
  readonly currencyCode: () => unknown;
  readonly defaultDocumentType: () => unknown;
  readonly deliveryCountries: () => unknown;
  readonly disableInputs: () => unknown;
  readonly documentMask: () => unknown;
  readonly emitLocaleChange: () => void;
  readonly executeRecaptcha: () => void;
  readonly getPaymentApplicationsList: () => void;
  readonly getTransactionURL: () => void;
  readonly giftCardSubmitHandler: () => void;
  readonly giftRegistryAddressId: () => unknown;
  readonly giftRegistryDescription: () => unknown;
  readonly giftRegistryId: () => unknown;
  readonly goToFinishTransaction: () => void;
  readonly goToFirstInvalidStep: () => void;
  readonly hasRecaptchaV3: () => unknown;
  readonly hasSelectableGifts: () => unknown;
  readonly implementedCountries: string[];
  readonly isNoteSaved: boolean;
  readonly isPostalCodeAccordingToCity: () => void;
  readonly isSavingNote: boolean;
  readonly isTotem: () => unknown;
  readonly isUsingGiftRegistry: () => unknown;
  readonly isUsingGiftRegistryAddress: () => unknown;
  readonly isUsingNote: () => unknown;
  readonly isUsingPostalCode: () => void;
  readonly killCookiePCI: () => void;
  readonly lastTransactionAuthAppIndex: () => unknown;
  readonly localeSetByAPI: boolean;
  readonly logAmplitudeAddSubscription: () => void;
  readonly loggedIn: () => unknown;
  readonly login: () => void;
  readonly logTransaction: () => void;
  readonly newNote: () => void;
  readonly note: () => unknown;
  readonly noteAutoSave: () => void;
  readonly noteSubmitHandler: () => void;
  readonly oldNote: () => unknown;
  readonly orderGroupId: () => unknown;
  readonly originalLocale: () => unknown;
  readonly originalSaveData: () => unknown;
  readonly originalSavePaymentData: () => unknown;
  readonly parseLogisticsInfo: () => void;
  readonly parseOrderFormResponse: () => void;
  readonly parseShippingData: () => void;
  readonly paymentAuthorizationAppCollection: () => unknown;
  readonly paymentSubmitHandler: () => void;
  readonly phoneMask: () => unknown;
  readonly postalCodeForgottenURL: () => unknown;
  readonly postalCodeMask: () => unknown;
  readonly recaptchaExpired: () => unknown;
  readonly recaptchaKey: undefined;
  readonly recaptchaResponse: () => void;
  readonly recaptchaToken: () => unknown;
  readonly recaptchaWidgetId: undefined;
  readonly redirectUrl: () => unknown;
  readonly registerFinishTransactionEvent: () => void;
  readonly removeGiftRegistry: () => void;
  readonly renderLoaded: () => unknown;
  readonly rootElement: Element;
  readonly saveData: () => unknown;
  readonly savedOptinNewsLetter: () => unknown;
  readonly savePaymentData: () => unknown;
  readonly saveUserDataOptInEnabled: () => unknown;
  readonly sendPayment: () => void;
  readonly setup: boolean;
  readonly setUsingNote: () => void;
  readonly shippingDataSubmitHandler: () => void;
  readonly showSecurityVerificationMessage: () => void;
  readonly startTransactionApps: () => void;
  readonly submitClientPreferencesData: () => void;
  readonly submitPayment: () => void;
  readonly toJSON: () => void;
  readonly unsetNewsletterIfNotSaved: () => void;
  readonly userProfileId: string;
  readonly userType: () => unknown;
}

interface ICartViewModel {
}

interface ISummaryViewModel {
}

interface IClientProfileDataViewModel {
}

interface IPaymentDataViewModel {
}

interface IShippingDataViewModel {
}

interface ILoginViewModel {
}

interface IPortal {
  actions: { onHashChange: (callback: string) => void };
  addData: (variables: unknown) => void;
  addEvent: (name: string, eventType: string, data: unknown) => void;
  context: { accountId: string };
  sendEvent: (name: string, variables: unknown) => void;
  subscribe: (id: string, callback: () => void, options?: unknown) => void;
  unsubscribe: (id: string) => void;
}

type RadioChannelNames =
  | "vtex.i18n.update"
  | "vtex.countryCode.update"
  | "paymentData.isVisible"
  | "checkout.totalizers.interest"
  | "checkout.shippingData.submit"
  | "checkout.shippingData.shippingAddress.submit"
  | "checkout.shippingData.clearUnselectedLogisticsInfo"
  | "checkout.shipping.create"
  | "checkout.sellers.create"
  | "checkout.ratesAndBenefitsData.create"
  | "checkout.paymentData.updateIFramePayments"
  | "checkout.paymentData.submitIFramePayment"
  | "checkout.paymentData.submit"
  | "checkout.paymentData.submit.success"
  | "checkout.paymentData.submit.fail"
  | "checkout.paymentData.paymentGroup.availability"
  | "checkout.paymentData.loading"
  | "checkout.paymentData.iFrameFinishTransaction"
  | "checkout.paymentData.giftPaymentsTotal"
  | "checkout.paymentData.giftcard.submit"
  | "checkout.paymentData.billingAddress.submit"
  | "checkout.paymentData.billingAddress.commit"
  | "checkout.openTextField"
  | "checkout.offering.remove"
  | "checkout.offering.loading"
  | "checkout.offering.fail"
  | "checkout.marketingData.create"
  | "checkout.item.submit"
  | "checkout.item.new.bundleItem"
  | "checkout.item.loading"
  | "checkout.giftRegistry"
  | "checkout.giftcard.submit"
  | "checkout.fixCart"
  | "checkout.disableInputs"
  | "checkout.coupon.loading"
  | "checkout.clientPreferencesData.updateSaveUserDataOptions"
  | "checkout.clientPreferencesData.setSavePersonalData"
  | "checkout.clientPreferencesData.setSavePaymentData"
  | "checkout.cart.loadingItem";
// 'paymentData.paymentGroup.iFrame." + this.getGroupIdentifier() + ".sendOrderForm' |
// "paymentData.paymentGroup.iFrame." + paymentGroup + iFramePaymentGroupId + ".submitButton" |
// "paymentData.paymentGroup.iFrame." + paymentGroup + iFramePaymentGroupId + ".setupComplete" |
// "paymentData.paymentGroup.iFrame." + paymentGroup + iFramePaymentGroupId + ".setIFrameHeight" |
// "paymentData.paymentGroup.iFrame." + paymentGroup + iFramePaymentGroupId + ".preSubmit" |
// "paymentData.paymentGroup.iFrame." + paymentGroup + iFramePaymentGroupId + ".doSubmit" |
// "paymentData.paymentGroup.iFrame." + iFrameGroupName iFrameGroupId + ".sendPayments" |
// "paymentData.paymentGroup.iFrame." + iFrameGroupName + ".sendPayments" |
// "paymentData.paymentGroup.iFrame." + groupName + ".submitButton" |
// "paymentData.paymentGroup.iFrame." + groupName + ".setupComplete" |
// "paymentData.paymentGroup.iFrame." + groupName + ".setIFrameHeight" |
// "paymentData.paymentGroup.iFrame." + groupName + ".sendPayments" |
// "paymentData.paymentGroup.iFrame." + groupName + ".sendOrderForm" |
// "paymentData.paymentGroup.iFrame." + groupName + ".preSubmit" |
// "paymentData.paymentGroup.iFrame." + groupName + ".doSubmit" |
// "checkout." + this.moduleId + ".update" |
// "checkout." + this.moduleId + ".submit" |


interface IRadio {
  subscribe: (callback: (value: unknown) => void) => void;
  broadcast: (value: string) => void;
}


interface IRenderLoader {
  getRuntimeContext: () => unknown;
}

export interface Namespace {
  checkout: ITracking & IConfig;
  portal: IPortal;

  readonly i18n: unknown;
  readonly localeUtils: unknown;
  readonly debug: unknown;
  readonly validation: unknown;
}

export interface Window extends Pick<Namespace, "checkout" | "portal"> {
  readonly cart: ICartViewModel;
  readonly summary: ISummaryViewModel;
  readonly clientProfileData: IClientProfileDataViewModel;
  readonly paymentData: IPaymentDataViewModel;
  readonly shippingData: IShippingDataViewModel;
  readonly loginRouteData: ILoginViewModel;
  readonly router: IRouter;

  readonly radio: (channel: RadioChannelNames) => IRadio;
  readonly renderLoader: IRenderLoader;
  readonly siteTitle: string;
  readonly accountName: string;
  readonly googleMapsApiKey: string;
  readonly geolocation: string | undefined;
  readonly invoiceAddress: string | undefined;
  readonly leanShipping: string | undefined;
  readonly recaptchaV3: string;
  readonly gtmId: string;
  readonly showInstallmentsPreviewValue: boolean;
  readonly enableObligatoryLogin: boolean;
}

// export const checkout: Pick<Namespace, "checkout">;
