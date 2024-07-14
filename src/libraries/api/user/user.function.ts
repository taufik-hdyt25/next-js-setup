// export const actionGetAddress = (
//     params: IParamGetAddress,
//     isEnabled: boolean = false,
//   ) =>
//     useQuery(['actionGetAddress', params], () => getAddressFromAPI(params), {
//       refetchOnWindowFocus: false,
//       retry: false,
//       select: (res) => (res?.data?.data as IPagination<IAddress[]>) ?? null,
//       enabled: isEnabled,
//     });
