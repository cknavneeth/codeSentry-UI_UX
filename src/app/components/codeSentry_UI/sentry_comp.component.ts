// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-sentry_comp',
  templateUrl: './sentry_comp.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class sentry_compComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_h6bAUltUSWDnJIUX(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_h6bAUltUSWDnJIUX(bh) {
    try {
      bh = this.sd_Q06QbUAwRxILMEHG(bh);
      //appendnew_next_sd_h6bAUltUSWDnJIUX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h6bAUltUSWDnJIUX');
    }
  }

  analyse(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_u3pZHKZ8XtHhILZa(bh);
      //appendnew_next_analyse
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sM1sInGqwk68ghnt');
    }
  }

  generateCase(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Q8Lf0y4d7qCh1B68(bh);
      //appendnew_next_generateCase
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tQvnjzMuM5lb5zKI');
    }
  }

  objectKeys(item: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { item };
      bh.local = {};
      bh = this.sd_8HXglnOOmRelicqF(bh);
      //appendnew_next_objectKeys
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IOnFacNlIULt57mR');
    }
  }

  formatValue(item: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { item };
      bh.local = {};
      bh = this.sd_Qy3ya14DV5shcpHx(bh);
      //appendnew_next_formatValue
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cIMs7qEG8aOp05IF');
    }
  }
  //appendnew_flow_sentry_compComponent_start

  sd_Q06QbUAwRxILMEHG(bh) {
    try {
      //appendnew_next_sd_Q06QbUAwRxILMEHG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q06QbUAwRxILMEHG');
    }
  }

  sd_u3pZHKZ8XtHhILZa(bh) {
    try {
      const page = this.page;
      bh.input.url = `http://localhost:8081/api/analyze`;

      bh.local.userInput = true;
      if (!page.story || !page.snippet) {
        bh.local.userInput = false;
      }

      bh.input.body = {
        story: page.story,
        snippet: page.snippet,
      };

      console.log('page.story', page.story);
      bh = this.sd_VD6WArHuK373qmaa(bh);
      //appendnew_next_sd_u3pZHKZ8XtHhILZa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u3pZHKZ8XtHhILZa');
    }
  }

  sd_VD6WArHuK373qmaa(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.userInput,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_DrKASgX39TEYpww3(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.userInput,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_o2Bbo7sx1JEDFDNm(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VD6WArHuK373qmaa');
    }
  }

  async sd_DrKASgX39TEYpww3(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_STrZwhNF2BoxTIhq(bh);
      //appendnew_next_sd_DrKASgX39TEYpww3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DrKASgX39TEYpww3');
    }
  }

  sd_STrZwhNF2BoxTIhq(bh) {
    try {
      const page = this.page;
      console.log('analyse res', bh.local.response);
      page.testCases = null;
      bh = this.sd_NF2JWl1DwrkqUBx9(bh);
      //appendnew_next_sd_STrZwhNF2BoxTIhq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_STrZwhNF2BoxTIhq');
    }
  }

  sd_NF2JWl1DwrkqUBx9(bh) {
    try {
      this.page.result = bh.local.response;
      //appendnew_next_sd_NF2JWl1DwrkqUBx9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NF2JWl1DwrkqUBx9');
    }
  }

  sd_o2Bbo7sx1JEDFDNm(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('inputs are missing', '', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      //appendnew_next_sd_o2Bbo7sx1JEDFDNm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o2Bbo7sx1JEDFDNm');
    }
  }

  sd_Q8Lf0y4d7qCh1B68(bh) {
    try {
      const page = this.page;
      bh.input.url = `http://localhost:8081/api/generateCase`;

      bh.local.userInput = true;

      if (!page.story || !page.snippet) {
        bh.local.userInput = false;
      }

      bh.input.body = {
        story: page.story,
        snippet: page.snippet,
      };
      bh = this.sd_Eyl9oCNKmbBNaR8J(bh);
      //appendnew_next_sd_Q8Lf0y4d7qCh1B68
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q8Lf0y4d7qCh1B68');
    }
  }

  sd_Eyl9oCNKmbBNaR8J(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.userInput,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_pLiHHYfPykTTxUOJ(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.userInput,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_L4ecolGLKS8jahx7(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Eyl9oCNKmbBNaR8J');
    }
  }

  async sd_pLiHHYfPykTTxUOJ(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_BinSuHtMMykQHo3a(bh);
      //appendnew_next_sd_pLiHHYfPykTTxUOJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pLiHHYfPykTTxUOJ');
    }
  }

  sd_BinSuHtMMykQHo3a(bh) {
    try {
      const page = this.page;
      console.log('testcases', bh.local.response?.testCases);
      page.result = null;
      bh = this.sd_SLixwHNifSC0IeuS(bh);
      //appendnew_next_sd_BinSuHtMMykQHo3a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BinSuHtMMykQHo3a');
    }
  }

  sd_SLixwHNifSC0IeuS(bh) {
    try {
      this.page.testCases = bh.local.response.testCases;
      //appendnew_next_sd_SLixwHNifSC0IeuS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SLixwHNifSC0IeuS');
    }
  }

  sd_L4ecolGLKS8jahx7(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('inputs are missing', '', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      //appendnew_next_sd_L4ecolGLKS8jahx7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L4ecolGLKS8jahx7');
    }
  }

  sd_8HXglnOOmRelicqF(bh) {
    try {
      const page = this.page;
      const skip = ['description', 'expectedResult'];
      return Object.keys(bh.input.item).filter((k) => !skip.includes(k));
      //appendnew_next_sd_8HXglnOOmRelicqF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8HXglnOOmRelicqF');
    }
  }

  sd_Qy3ya14DV5shcpHx(bh) {
    try {
      const page = this.page;
      let val = bh.input.item;

      if (val === null || val === undefined) return '-';
      if (typeof val === 'object') return JSON.stringify(val);
      return String(val);
      //appendnew_next_sd_Qy3ya14DV5shcpHx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qy3ya14DV5shcpHx');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_sentry_compComponent_Catch
}
