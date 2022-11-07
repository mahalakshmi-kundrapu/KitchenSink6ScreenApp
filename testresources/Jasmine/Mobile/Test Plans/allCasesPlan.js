require(["Test Suites/deviceFeaturesSuite"], function() {
	require(["Test Suites/formAnimationsSuite"], function() {
		require(["Test Suites/UISuite"], function() {
						jasmine.getEnv().execute();
		});
	});
});