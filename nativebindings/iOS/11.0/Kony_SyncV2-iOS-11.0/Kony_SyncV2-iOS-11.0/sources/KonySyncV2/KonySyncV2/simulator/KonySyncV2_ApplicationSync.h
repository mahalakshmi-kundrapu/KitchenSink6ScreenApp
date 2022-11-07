#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_KonySyncV2_ApplicationSync_symbols(JSContext*);
@protocol ApplicationSyncInstanceExports<JSExport>
@end
@protocol ApplicationSyncClassExports<JSExport>
+(void) setReportingParams: (NSString *) reportingParams ;
JSExportAs(rollbackOnFailure,
+(void) jsrollback: (JSValue *) onSuccess onFailure: (JSValue *) onFailure );
JSExportAs(dropOnSuccessOnFailure,
+(void) jsdrop: (NSDictionary *) options onSuccess: (JSValue *) onSuccess onFailure: (JSValue *) onFailure );
+(void) setToken: (NSString *) token ;
JSExportAs(startSyncOnSuccessOnFailureOnProgress,
+(void) jsstartSync: (NSDictionary *) options onSuccess: (JSValue *) onSuccess onFailure: (JSValue *) onFailure onProgress: (JSValue *) onProgress );
JSExportAs(executeSelectQueryOnSuccessOnFailure,
+(void) jsexecuteSelectQuery: (NSString *) query onSuccess: (JSValue *) onSuccess onFailure: (JSValue *) onFailure );
JSExportAs(resetWithOptionsOnSuccessOnFailure,
+(void) jsreset: (NSDictionary *) objectServiceList withOptions: (NSDictionary *) options onSuccess: (JSValue *) onSuccess onFailure: (JSValue *) onFailure );
JSExportAs(setupSyncWithOptionsOnSuccessOnFailure,
+(void) jssetupSync: (NSDictionary *) objectServiceList withOptions: (NSDictionary *) options onSuccess: (JSValue *) onSuccess onFailure: (JSValue *) onFailure );
@end
#pragma clang diagnostic pop