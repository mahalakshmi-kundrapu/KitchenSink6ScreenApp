#import <objc/runtime.h>
#import "allincludes.h"
#import <NFIUtility/CallbackSupport.h>
#import <NFIUtility/PointerSupport.h>
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
}
static void registerCFunctions(JSContext* context)
{
	context[@"CFMessagePortInvalidate"] = ^void(id arg0) {
		CFMessagePortInvalidate(arg0);
	};
	context[@"CFMessagePortCreateRunLoopSource"] = ^id(id arg0, id arg1, CFIndex arg2) {
		return CFMessagePortCreateRunLoopSource(arg0, arg1, arg2);
	};
	context[@"CFMessagePortGetName"] = ^id(id arg0) {
		return CFMessagePortGetName(arg0);
	};
	context[@"CFMessagePortIsRemote"] = ^Boolean(id arg0) {
		return CFMessagePortIsRemote(arg0);
	};
	context[@"CFMessagePortIsValid"] = ^Boolean(id arg0) {
		return CFMessagePortIsValid(arg0);
	};
	context[@"CFMessagePortCreateRemote"] = ^id(id arg0, id arg1) {
		return CFMessagePortCreateRemote(arg0, arg1);
	};
	context[@"CFMessagePortSetName"] = ^Boolean(id arg0, id arg1) {
		return CFMessagePortSetName(arg0, arg1);
	};
	context[@"CFMessagePortGetTypeID"] = ^CFTypeID() {
		return CFMessagePortGetTypeID();
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCFMessagePortSuccess"] = @0L;
	context[@"kCFMessagePortSendTimeout"] = @-1L;
	context[@"kCFMessagePortReceiveTimeout"] = @-2L;
	context[@"kCFMessagePortIsInvalid"] = @-3L;
	context[@"kCFMessagePortTransportError"] = @-4L;
	context[@"kCFMessagePortBecameInvalidError"] = @-5L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreFoundation_CFMessagePort_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
