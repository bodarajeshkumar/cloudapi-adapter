	Object.keys(vpcJson.paths).forEach(function(path) {
		Object.keys(vpcJson.paths[path]).forEach(function(operation){
			if(vpcJson.paths[path][operation].tags && vpcJson.paths[path][operation].tags.includes("VPCs")>0)
			{
				console.log(vpcJson.paths[path][operation].operationId);
				console.log(vpcJson.paths[path][operation].summary);
                let apiDetails = vpcJson.paths[path][operation];
                let output:any = {};
                let codeSnippet:any = {};
                output.apiName = apiDetails.operationId;
                output.description = apiDetails.description;
                output.title = apiDetails.title;
                output.codeSnippets = [];
                codeSnippet.language = "python";
                codeSnippet.codeSnippet = apiDetails["x-sdk-operations"]["request-examples"]["python"][0]["example"][0].source[0];
                output.codeSnippets.push(codeSnippet);
                allCodeSnippets.push(output);
			}
			//console.log(vpcJson.paths[path][operation].tags);
		});
	});
